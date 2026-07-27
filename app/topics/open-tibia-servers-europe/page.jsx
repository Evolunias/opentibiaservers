import OpenTibiaServersEuropeKeywordPage, { generateMetadata } from './open-tibia-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersEuropeKeywordPage />;
}
