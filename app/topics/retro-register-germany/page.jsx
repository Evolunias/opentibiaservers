import RetroRegisterGermanyKeywordPage, { generateMetadata } from './retro-register-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterGermanyKeywordPage />;
}
