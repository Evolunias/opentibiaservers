import NostaltherFranceServerKeywordPage, { generateMetadata } from './nostalther-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherFranceServerKeywordPage />;
}
