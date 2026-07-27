import Serenity76BaiakServerKeywordPage, { generateMetadata } from './serenity-7-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76BaiakServerKeywordPage />;
}
