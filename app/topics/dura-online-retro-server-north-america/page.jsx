import DuraOnlineRetroServerNorthAmericaKeywordPage, { generateMetadata } from './dura-online-retro-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRetroServerNorthAmericaKeywordPage />;
}
