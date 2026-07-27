import LowExpOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './low-exp-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOpenTibiaServerEuropeKeywordPage />;
}
