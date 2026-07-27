import DuraOnlineRetroServerUsaKeywordPage, { generateMetadata } from './dura-online-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerUsaKeywordPage />;
}
