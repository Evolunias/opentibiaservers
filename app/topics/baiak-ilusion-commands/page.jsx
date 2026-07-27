import BaiakIlusionCommandsKeywordPage, { generateMetadata } from './baiak-ilusion-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionCommandsKeywordPage />;
}
