import CustomArchlightTibiaKeywordPage, { generateMetadata } from './custom-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightTibiaKeywordPage />;
}
