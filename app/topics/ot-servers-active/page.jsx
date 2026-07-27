import OtServersActiveKeywordPage, { generateMetadata } from './ot-servers-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersActiveKeywordPage />;
}
