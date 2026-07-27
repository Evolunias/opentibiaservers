import CustomEvoleraOpenTibiaKeywordPage, { generateMetadata } from './custom-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraOpenTibiaKeywordPage />;
}
