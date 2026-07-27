import LowrateTibiaraRegisterKeywordPage, { generateMetadata } from './lowrate-tibiara-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraRegisterKeywordPage />;
}
