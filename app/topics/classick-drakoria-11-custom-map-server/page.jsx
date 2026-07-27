import ClassickDrakoria11CustomMapServerKeywordPage, { generateMetadata } from './classick-drakoria-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria11CustomMapServerKeywordPage />;
}
