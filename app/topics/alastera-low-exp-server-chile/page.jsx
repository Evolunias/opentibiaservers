import AlasteraLowExpServerChileKeywordPage, { generateMetadata } from './alastera-low-exp-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraLowExpServerChileKeywordPage />;
}
