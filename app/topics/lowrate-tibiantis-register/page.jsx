import LowrateTibiantisRegisterKeywordPage, { generateMetadata } from './lowrate-tibiantis-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisRegisterKeywordPage />;
}
