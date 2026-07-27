import HighExpServerEuropeKeywordPage, { generateMetadata } from './high-exp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerEuropeKeywordPage />;
}
