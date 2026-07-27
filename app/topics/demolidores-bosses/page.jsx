import DemolidoresBossesKeywordPage, { generateMetadata } from './demolidores-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresBossesKeywordPage />;
}
