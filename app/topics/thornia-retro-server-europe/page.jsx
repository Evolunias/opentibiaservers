import ThorniaRetroServerEuropeKeywordPage, { generateMetadata } from './thornia-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRetroServerEuropeKeywordPage />;
}
