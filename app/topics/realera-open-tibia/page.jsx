import RealeraOpenTibiaKeywordPage, { generateMetadata } from './realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraOpenTibiaKeywordPage />;
}
