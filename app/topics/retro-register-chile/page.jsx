import RetroRegisterChileKeywordPage, { generateMetadata } from './retro-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRegisterChileKeywordPage />;
}
