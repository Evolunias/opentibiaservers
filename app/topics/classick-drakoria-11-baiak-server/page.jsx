import ClassickDrakoria11BaiakServerKeywordPage, { generateMetadata } from './classick-drakoria-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoria11BaiakServerKeywordPage />;
}
