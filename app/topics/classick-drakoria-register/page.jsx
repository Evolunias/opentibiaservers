import ClassickDrakoriaRegisterKeywordPage, { generateMetadata } from './classick-drakoria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaRegisterKeywordPage />;
}
