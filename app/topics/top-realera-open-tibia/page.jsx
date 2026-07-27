import TopRealeraOpenTibiaKeywordPage, { generateMetadata } from './top-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraOpenTibiaKeywordPage />;
}
