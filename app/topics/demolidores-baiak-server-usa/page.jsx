import DemolidoresBaiakServerUsaKeywordPage, { generateMetadata } from './demolidores-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresBaiakServerUsaKeywordPage />;
}
