import CurrentXanteriaServerKeywordPage, { generateMetadata } from './current-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaServerKeywordPage />;
}
