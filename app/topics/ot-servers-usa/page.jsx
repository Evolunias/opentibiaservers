import OtServersUsaKeywordPage, { generateMetadata } from './ot-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersUsaKeywordPage />;
}
