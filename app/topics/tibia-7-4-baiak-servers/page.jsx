import Tibia74BaiakServersKeywordPage, { generateMetadata } from './tibia-7-4-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74BaiakServersKeywordPage />;
}
