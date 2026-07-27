import RubinotTrailerKeywordPage, { generateMetadata } from './rubinot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotTrailerKeywordPage />;
}
