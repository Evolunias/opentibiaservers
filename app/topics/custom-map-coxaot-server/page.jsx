import CustomMapCoxaotServerKeywordPage, { generateMetadata } from './custom-map-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCoxaotServerKeywordPage />;
}
