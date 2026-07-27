import TopRealestaOpenTibiaKeywordPage, { generateMetadata } from './top-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaOpenTibiaKeywordPage />;
}
