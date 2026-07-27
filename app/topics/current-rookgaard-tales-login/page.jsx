import CurrentRookgaardTalesLoginKeywordPage, { generateMetadata } from './current-rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesLoginKeywordPage />;
}
