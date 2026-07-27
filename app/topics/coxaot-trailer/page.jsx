import CoxaotTrailerKeywordPage, { generateMetadata } from './coxaot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotTrailerKeywordPage />;
}
