import PopularEvoleraOpenTibiaKeywordPage, { generateMetadata } from './popular-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraOpenTibiaKeywordPage />;
}
