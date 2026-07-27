import EvoRegisterChileKeywordPage, { generateMetadata } from './evo-register-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterChileKeywordPage />;
}
