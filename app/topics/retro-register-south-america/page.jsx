import RetroRegisterSouthAmericaKeywordPage, { generateMetadata } from './retro-register-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterSouthAmericaKeywordPage />;
}
