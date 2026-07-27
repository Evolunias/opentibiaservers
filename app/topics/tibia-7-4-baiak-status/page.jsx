import Tibia74BaiakStatusKeywordPage, { generateMetadata } from './tibia-7-4-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74BaiakStatusKeywordPage />;
}
