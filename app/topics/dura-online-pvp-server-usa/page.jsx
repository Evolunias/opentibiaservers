import DuraOnlinePvpServerUsaKeywordPage, { generateMetadata } from './dura-online-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlinePvpServerUsaKeywordPage />;
}
