import CurrentAmeriaPrivateServerKeywordPage, { generateMetadata } from './current-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaPrivateServerKeywordPage />;
}
