import LowrateThorniaRegisterKeywordPage, { generateMetadata } from './lowrate-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaRegisterKeywordPage />;
}
