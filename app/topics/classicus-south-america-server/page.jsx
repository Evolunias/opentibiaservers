import ClassicusSouthAmericaServerKeywordPage, { generateMetadata } from './classicus-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusSouthAmericaServerKeywordPage />;
}
