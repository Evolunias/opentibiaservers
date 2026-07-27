import InfernalOtTrailerKeywordPage, { generateMetadata } from './infernal-ot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtTrailerKeywordPage />;
}
