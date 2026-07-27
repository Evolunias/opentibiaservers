import OxygenotTrailerKeywordPage, { generateMetadata } from './oxygenot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotTrailerKeywordPage />;
}
