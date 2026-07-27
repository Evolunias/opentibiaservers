import DemolidoresPvpeKeywordPage, { generateMetadata } from './demolidores-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresPvpeKeywordPage />;
}
