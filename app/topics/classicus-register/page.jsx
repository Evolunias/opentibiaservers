import ClassicusRegisterKeywordPage, { generateMetadata } from './classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRegisterKeywordPage />;
}
