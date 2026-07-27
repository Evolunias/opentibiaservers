import CustomArchlightOpenTibiaKeywordPage, { generateMetadata } from './custom-archlight-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightOpenTibiaKeywordPage />;
}
