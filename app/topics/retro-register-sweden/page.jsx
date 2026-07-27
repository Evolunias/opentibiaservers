import RetroRegisterSwedenKeywordPage, { generateMetadata } from './retro-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterSwedenKeywordPage />;
}
