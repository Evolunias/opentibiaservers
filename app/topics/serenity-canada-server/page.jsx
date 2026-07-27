import SerenityCanadaServerKeywordPage, { generateMetadata } from './serenity-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCanadaServerKeywordPage />;
}
