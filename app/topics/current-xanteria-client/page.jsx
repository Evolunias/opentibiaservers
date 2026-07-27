import CurrentXanteriaClientKeywordPage, { generateMetadata } from './current-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaClientKeywordPage />;
}
