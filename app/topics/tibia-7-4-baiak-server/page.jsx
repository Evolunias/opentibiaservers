import Tibia74BaiakServerKeywordPage, { generateMetadata } from './tibia-7-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74BaiakServerKeywordPage />;
}
