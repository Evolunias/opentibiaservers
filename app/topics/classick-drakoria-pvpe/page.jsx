import ClassickDrakoriaPvpeKeywordPage, { generateMetadata } from './classick-drakoria-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaPvpeKeywordPage />;
}
