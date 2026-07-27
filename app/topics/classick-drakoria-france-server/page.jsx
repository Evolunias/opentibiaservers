import ClassickDrakoriaFranceServerKeywordPage, { generateMetadata } from './classick-drakoria-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaFranceServerKeywordPage />;
}
