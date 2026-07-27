import DemolidoresFranceServerKeywordPage, { generateMetadata } from './demolidores-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresFranceServerKeywordPage />;
}
