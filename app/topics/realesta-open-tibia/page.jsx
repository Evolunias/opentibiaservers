import RealestaOpenTibiaKeywordPage, { generateMetadata } from './realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOpenTibiaKeywordPage />;
}
